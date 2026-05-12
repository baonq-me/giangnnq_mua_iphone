function Certificate() {
  return (
    <div className="min-h-screen flex justify-center items-center p-5" style={{ background: 'linear-gradient(135deg, #a8e6cf 0%, #dcedc1 50%, #a8e6cf 100%)' }}>
      <div className="w-full max-w-[800px] rounded-3xl shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fff5f9 0%, #fff0f5 50%, #fff5f9 100%)' }}>
        {/* Decorative rose corners */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-60 pointer-events-none">
          <svg viewBox="0 0 128 128" fill="none">
            <circle cx="30" cy="30" r="18" fill="#f9a8d4" opacity="0.7"/>
            <circle cx="50" cy="20" r="14" fill="#f472b6" opacity="0.6"/>
            <circle cx="20" cy="50" r="14" fill="#ec4899" opacity="0.5"/>
            <circle cx="45" cy="45" r="10" fill="#f9a8d4" opacity="0.8"/>
            <circle cx="65" cy="35" r="8" fill="#fbbf24" opacity="0.4"/>
            <path d="M0 128 Q20 80 40 60 Q30 100 0 128Z" fill="#86efac" opacity="0.5"/>
            <path d="M0 128 Q10 90 25 70 Q15 100 0 128Z" fill="#4ade80" opacity="0.4"/>
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-60 pointer-events-none">
          <svg viewBox="0 0 128 128" fill="none">
            <circle cx="98" cy="30" r="18" fill="#f9a8d4" opacity="0.7"/>
            <circle cx="78" cy="20" r="14" fill="#f472b6" opacity="0.6"/>
            <circle cx="108" cy="50" r="14" fill="#ec4899" opacity="0.5"/>
            <circle cx="83" cy="45" r="10" fill="#f9a8d4" opacity="0.8"/>
            <circle cx="63" cy="35" r="8" fill="#fbbf24" opacity="0.4"/>
            <path d="M128 128 Q108 80 88 60 Q98 100 128 128Z" fill="#86efac" opacity="0.5"/>
            <path d="M128 128 Q118 90 103 70 Q113 100 128 128Z" fill="#4ade80" opacity="0.4"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-60 pointer-events-none">
          <svg viewBox="0 0 128 128" fill="none">
            <circle cx="30" cy="98" r="18" fill="#f9a8d4" opacity="0.7"/>
            <circle cx="50" cy="108" r="14" fill="#f472b6" opacity="0.6"/>
            <circle cx="20" cy="78" r="14" fill="#ec4899" opacity="0.5"/>
            <circle cx="45" cy="83" r="10" fill="#f9a8d4" opacity="0.8"/>
            <circle cx="65" cy="93" r="8" fill="#fbbf24" opacity="0.4"/>
            <path d="M0 0 Q20 48 40 68 Q30 28 0 0Z" fill="#86efac" opacity="0.5"/>
            <path d="M0 0 Q10 38 25 58 Q15 28 0 0Z" fill="#4ade80" opacity="0.4"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-60 pointer-events-none">
          <svg viewBox="0 0 128 128" fill="none">
            <circle cx="98" cy="98" r="18" fill="#f9a8d4" opacity="0.7"/>
            <circle cx="78" cy="108" r="14" fill="#f472b6" opacity="0.6"/>
            <circle cx="108" cy="78" r="14" fill="#ec4899" opacity="0.5"/>
            <circle cx="83" cy="83" r="10" fill="#f9a8d4" opacity="0.8"/>
            <circle cx="63" cy="93" r="8" fill="#fbbf24" opacity="0.4"/>
            <path d="M128 0 Q108 48 88 68 Q98 28 128 0Z" fill="#86efac" opacity="0.5"/>
            <path d="M128 0 Q118 38 103 58 Q113 28 128 0Z" fill="#4ade80" opacity="0.4"/>
          </svg>
        </div>

        {/* Top decorative roses - large bouquet */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-1 opacity-70 pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="15" r="12" fill="#f9a8d4"/>
            <circle cx="15" cy="20" r="8" fill="#f472b6" opacity="0.8"/>
            <circle cx="25" cy="20" r="8" fill="#f472b6" opacity="0.8"/>
            <circle cx="20" cy="22" r="6" fill="#ec4899" opacity="0.6"/>
            <circle cx="20" cy="18" r="3" fill="#fbbf24" opacity="0.7"/>
          </svg>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="18" r="15" fill="#f9a8d4"/>
            <circle cx="18" cy="25" r="10" fill="#f472b6" opacity="0.8"/>
            <circle cx="32" cy="25" r="10" fill="#f472b6" opacity="0.8"/>
            <circle cx="25" cy="28" r="8" fill="#ec4899" opacity="0.6"/>
            <circle cx="25" cy="22" r="4" fill="#fbbf24" opacity="0.7"/>
          </svg>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="15" r="12" fill="#f9a8d4"/>
            <circle cx="15" cy="20" r="8" fill="#f472b6" opacity="0.8"/>
            <circle cx="25" cy="20" r="8" fill="#f472b6" opacity="0.8"/>
            <circle cx="20" cy="22" r="6" fill="#ec4899" opacity="0.6"/>
            <circle cx="20" cy="18" r="3" fill="#fbbf24" opacity="0.7"/>
          </svg>
        </div>

        {/* Main card content */}
        <div className="relative z-10 p-12 pt-16">
          {/* Header - Thư chúc mừng */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-2">🌹🌹🌹</div>
            <h1 className="text-4xl font-bold mb-1" style={{ 
              background: 'linear-gradient(135deg, #ec4899, #f472b6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              THƯ CHÚC MỪNG
            </h1>
          </div>

          {/* Content - iPhone 17 Pro */}
          <div className="text-center mb-10 relative">
            <div className="text-4xl font-bold my-4" style={{ 
              background: 'linear-gradient(135deg, #ec4899, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              GiangNNQ
            </div>
            <p className="text-xl mb-6" style={{ color: '#6b7280' }}>
              Chúc mừng bạn đã mua thành công
            </p>
            <div className="my-6 flex justify-center">
              <img 
                src="/iphone17pro.jpg" 
                alt="iPhone 17 Pro" 
                className="w-64 h-auto rounded-2xl shadow-xl"
                style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              />
            </div>
            <p className="text-3xl font-bold my-3" style={{ 
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              iPhone 17 Pro
            </p>
            <p className="text-lg mb-3" style={{ color: '#6b7280' }}>
              được xem là một trong những thiết bị công nghệ hàng đầu thế giới
            </p>
            <p className="text-lg" style={{ color: '#6b7280' }}>
              với những tính năng vượt trội và thiết kế đẳng cấp.
            </p>
            <span className="inline-block text-white px-6 py-2 rounded-full text-lg font-bold mt-5 shadow-lg" style={{ 
              background: 'linear-gradient(135deg, #ec4899, #a855f7)',
              boxShadow: '0 4px 15px rgba(236, 72, 153, 0.4)'
            }}>
              🎉 iPhone 17 Pro 🎉
            </span>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-end mt-8 pt-6 border-t-2" style={{ borderColor: '#f9a8d4' }}>
            <div className="text-center flex-1">
              <div className="text-2xl font-cursive mb-1" style={{ color: '#6b7280', fontFamily: 'cursive' }}>
                Nguyễn Quốc Bảo (baonq5)
              </div>
              <div className="text-sm" style={{ color: '#9ca3af' }}>
                Presented by
              </div>
            </div>
            <div className="text-center flex-1">
              <div className="text-lg mb-1" style={{ color: '#6b7280' }}>
                Ngày 12 tháng 5 năm 2026
              </div>
              <div className="text-sm" style={{ color: '#9ca3af' }}>
                May 12, 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return <Certificate />
}

export default App