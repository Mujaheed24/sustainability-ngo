'use client'

import { useState, useRef, useEffect } from 'react'
import { Share2, Link2, Check, MessageCircle, Send } from 'lucide-react'

export default function CopyLinkButton({
  anchor,
  label = 'Share',
  dark = false,
  shareText = 'Check this out',
}: {
  anchor: string // e.g. '#volunteer' or '#partner'
  label?: string
  dark?: boolean
  shareText?: string // text shown alongside the link when sharing to WhatsApp etc.
}) {
  const [copied, setCopied] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  function getUrl() {
    return `${window.location.origin}${window.location.pathname}${anchor}`
  }

  function handleCopy() {
    navigator.clipboard.writeText(getUrl())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    setOpen(false)
  }

  function handleWhatsApp() {
    const text = encodeURIComponent(`${shareText} ${getUrl()}`)
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer')
    setOpen(false)
  }

  function handleTelegram() {
    const url = encodeURIComponent(getUrl())
    const text = encodeURIComponent(shareText)
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank', 'noopener,noreferrer')
    setOpen(false)
  }

  async function handleNativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title: shareText, url: getUrl() })
      } catch {
        // user cancelled, do nothing
      }
      setOpen(false)
    }
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const baseColor = dark ? '#86efac' : '#1a5c2a'
  const bg = dark ? 'rgba(74,222,128,0.1)' : '#f0faf1'
  const menuBg = dark ? '#0d1f2d' : '#ffffff'
  const menuBorder = dark ? 'rgba(74,222,128,0.2)' : '#e5e7eb'
  const menuText = dark ? '#e5e7eb' : '#0d1f2d'

  const hasNativeShare = typeof window !== 'undefined' && !!navigator.share

  return (
    <div ref={menuRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: bg,
          color: baseColor,
          border: 'none',
          borderRadius: '9999px',
          padding: '0.4rem 0.9rem',
          fontSize: '0.78rem',
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'background 0.2s, color 0.2s',
        }}
      >
        <Share2 style={{ width: '14px', height: '14px' }} />
        {label}
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: '50%',
            transform: 'translateX(-50%)',
            background: menuBg,
            border: `1px solid ${menuBorder}`,
            borderRadius: '0.875rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            padding: '0.4rem',
            zIndex: 20,
            minWidth: '190px',
          }}
        >
          {hasNativeShare && (
            <button type="button" onClick={handleNativeShare} style={menuItemStyle(menuText)}>
              <Share2 style={{ width: '15px', height: '15px', color: baseColor }} />
              Share via…
            </button>
          )}
          <button type="button" onClick={handleWhatsApp} style={menuItemStyle(menuText)}>
            <MessageCircle style={{ width: '15px', height: '15px', color: '#25D366' }} />
            WhatsApp
          </button>
          <button type="button" onClick={handleTelegram} style={menuItemStyle(menuText)}>
            <Send style={{ width: '15px', height: '15px', color: '#229ED9' }} />
            Telegram
          </button>
          <button type="button" onClick={handleCopy} style={menuItemStyle(menuText)}>
            {copied ? (
              <Check style={{ width: '15px', height: '15px', color: baseColor }} />
            ) : (
              <Link2 style={{ width: '15px', height: '15px', color: baseColor }} />
            )}
            {copied ? 'Link Copied!' : 'Copy Link'}
          </button>
        </div>
      )}
    </div>
  )
}

function menuItemStyle(color: string): React.CSSProperties {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    background: 'none',
    border: 'none',
    borderRadius: '0.5rem',
    padding: '0.6rem 0.7rem',
    fontSize: '0.82rem',
    fontWeight: 600,
    color,
    cursor: 'pointer',
    textAlign: 'left',
  }
}