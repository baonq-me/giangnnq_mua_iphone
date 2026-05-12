#!/bin/bash

# Configuration
SERVER="103.155.161.182"
PORT="22"
USER="root"
KEY="~/.ssh/iphone17pro_rsa"
REMOTE_DIR="/var/www/iphone17pro"
APP_NAME="iphone17pro"

echo "🚀 Deploying iPhone 17 Pro Certificate App with PM2..."
echo ""

# Upload dist folder to server
echo "📦 Uploading build files..."
ssh -i $KEY -o IdentitiesOnly=yes $USER@$SERVER -p $PORT "mkdir -p $REMOTE_DIR/dist"
scp -i $KEY -o IdentitiesOnly=yes -r ./dist/* $USER@$SERVER:$REMOTE_DIR/dist/

if [ $? -ne 0 ]; then
    echo "❌ Upload failed!"
    exit 1
fi

# Upload server.js
echo "📦 Uploading server.js..."
scp -i $KEY -o IdentitiesOnly=yes server.js $USER@$SERVER:$REMOTE_DIR/

if [ $? -ne 0 ]; then
    echo "❌ Upload failed!"
    exit 1
fi

# Install and configure PM2 on server
echo "⚙️  Configuring PM2..."
ssh -i $KEY -o IdentitiesOnly=yes $USER@$SERVER -p $PORT "
    # Install PM2 if not installed
    if ! command -v pm2 &> /dev/null; then
        echo 'Installing PM2...'
        npm install -g pm2
    fi
    
    # Create PM2 ecosystem config
    cat > $REMOTE_DIR/ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'iphone17pro',
    script: 'server.js',
    exec_mode: 'fork',
    cwd: '$REMOTE_DIR',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 8888
    },
    error_file: '$REMOTE_DIR/logs/error.log',
    out_file: '$REMOTE_DIR/logs/out.log',
    log_file: '$REMOTE_DIR/logs/combined.log',
    time: true
  }]
};
EOF
    
    # Create logs directory
    mkdir -p $REMOTE_DIR/logs
    
    # Stop existing app if running
    pm2 delete $APP_NAME 2>/dev/null || true
    
    # Start app with PM2
    cd $REMOTE_DIR
    pm2 start ecosystem.config.js
    
    # Save PM2 process list for auto-restart on reboot
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    echo 'PM2 configured successfully!'
"

if [ $? -eq 0 ]; then
    echo "✅ PM2 configured successfully!"
else
    echo "❌ Failed to configure PM2!"
    exit 1
fi

echo ""
echo "🎉 Deployment complete!"
echo "📍 Access your app at: http://$SERVER:8888"
echo "📊 PM2 status: ssh -i $KEY $USER@$SERVER 'pm2 list'"
