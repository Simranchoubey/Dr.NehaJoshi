"use client"
export default function FloatingButtons(){
  return (
    <div className="floating-actions fixed safe-bottom" style={{right: '1.5rem', bottom: '1.5rem', zIndex: 60}}>
      <a aria-label="Call clinic" href="tel:+918675600088" className="fab bg-blue-600 text-white rounded-full shadow-lg" title="Call">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5.5A2.5 2.5 0 015.5 3h1A2.5 2.5 0 019 5.5v1A2.5 2.5 0 016.5 9h-1A2.5 2.5 0 013 6.5v-1zM21 18.5A2.5 2.5 0 0018.5 21h-1A2.5 2.5 0 0114 18.5v-1A2.5 2.5 0 0116.5 15h1A2.5 2.5 0 0121 17.5v1z" />
        </svg>
      </a>

      <a aria-label="WhatsApp message" href="https://wa.me/918675600088?text=I%20want%20to%20book%20an%20appointment%20with%20Dr.%20Neha%20Joshi" target="_blank" rel="noreferrer" className="fab bg-green-500 text-white rounded-full shadow-lg" title="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M21 12.05A8.94 8.94 0 1112.05 3 8.94 8.94 0 0121 12.05z" />
          <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M17.5 15.5c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.7.2-.3.4-1 1.2-1.2 1.4-.2.3-.4.4-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1.1-1.8-2.4-2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.6.6-.9.2-.3.2-.5.3-.8.1-.3 0-.6-.1-.8-.1-.2-.7-1.6-1-2.2-.3-.6-.6-.5-.8-.5-.2 0-.4 0-.7 0s-1 .3-1.6.8c-.6.5-1.6 1.7-1.6 4.1s1.6 4.7 1.8 5c.2.3 3 4.8 7.3 6.7 4.3 1.9 4.3 1.2 5 1.1.6-.1 2.4-.9 2.7-2.1.3-1.2.3-2.2.2-2.4-.1-.2-.3-.4-.6-.6z" />
        </svg>
      </a>
    </div>
  )
}
