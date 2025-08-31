'use client';

export default function Home() {
  const handleDonation = () => {
    window.open('https://buy.stripe.com/14AaEWeCW1MkfKmdKbcV204', '_blank');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 relative">
      <div className="text-center">
        <div className="relative inline-block">
          {/* Sticker souriant qui apparaît au survol */}
          <div className="
            absolute -top-16 left-1/2 transform -translate-x-1/2
            opacity-0 group-hover:opacity-100
            translate-y-4 group-hover:translate-y-0
            transition-all duration-300 ease-out
            pointer-events-none
            text-4xl
          ">
            😊
          </div>

          <button
            onClick={handleDonation}
            className="
              relative overflow-hidden
              bg-green-500 hover:bg-green-600
              text-white font-semibold
              px-7 py-4 rounded-lg
              text-base
              transition-all duration-300 ease-out
              transform hover:scale-105
              shadow-lg hover:shadow-2xl
              group
              border-2 border-green-600
              mb-4
            "
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              
              e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
            }}
          >
            {/* Effet de lumière qui suit la souris */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
              style={{
                background: `radial-gradient(circle 100px at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                             rgba(255, 255, 255, 0.2) 0%, 
                             rgba(255, 255, 255, 0.1) 30%, 
                             transparent 70%)`,
              }}
            />
            
            {/* Effet de brillance */}
            <div className="
              absolute inset-0 opacity-0 group-hover:opacity-100
              bg-gradient-to-tr from-transparent via-white/10 to-transparent
              transform -skew-x-12 -translate-x-full
              group-hover:translate-x-full transition-transform duration-700
            " />
            
            <span className="relative z-10">
              Un simple clic pour montrer ta générosité
            </span>
          </button>
        </div>
        
        <p className="text-gray-600 italic text-base max-w-2xl leading-relaxed">
          Pas de compte, pas d&apos;inscription, juste un bouton. Chaque clic est une contribution directe, 
          un geste spontané qui en dit long sur ta générosité.
        </p>
      </div>

      {/* Copyright fixe en bas */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 py-2">
        <p className="text-center text-xs text-gray-500">
          © 2025 rich button. Tous droits réservés. | Concept original by Clark
        </p>
      </div>
    </div>
  );
}
