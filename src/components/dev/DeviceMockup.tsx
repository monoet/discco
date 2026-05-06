interface DeviceMockupProps {
  device: 'mobile' | 'desktop' | 'both';
  mockupType: 'menu-digital' | 'landing' | 'catalogo' | 'brand-hub';
  className?: string;
}

export default function DeviceMockup({ device, mockupType }: DeviceMockupProps) {
  const isPhone = device === 'mobile' || (device === 'both');
  const isDesktop = device === 'desktop' || (device === 'both');

  return (
    <div className={`flex gap-4 items-end ${device === 'both' ? '' : device === 'desktop' ? 'justify-center' : ''}`}>
      {isPhone && (
        <div className="relative" style={{ width: '200px' }}>
          {/* Phone frame */}
          <div className="bg-[var(--discco-charcoal)] rounded-[20px] p-1.5 shadow-lg">
            <div className="bg-white rounded-[14px] overflow-hidden">
              <PhoneContent mockupType={mockupType} />
            </div>
          </div>
          {/* Home indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[var(--discco-taupe)] rounded-full" />
        </div>
      )}

      {isDesktop && (
        <div className="relative" style={{ width: '320px' }}>
          {/* Browser frame */}
          <div className="bg-[var(--discco-charcoal)] rounded-lg p-2 shadow-lg">
            {/* Chrome */}
            <div className="flex items-center gap-1.5 mb-2 px-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--discco-taupe)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--discco-taupe)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--discco-taupe)]" />
              <div className="flex-1 mx-2 h-4 bg-[var(--discco-ink)] rounded" />
            </div>
            {/* Screen */}
            <div className="bg-white rounded overflow-hidden">
              <DesktopContent mockupType={mockupType} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PhoneContent({ mockupType }: { mockupType: DeviceMockupProps['mockupType'] }) {
  if (mockupType === 'menu-digital') {
    return (
      <div className="p-2 space-y-1.5">
        {/* Mini hero */}
        <div className="h-8 bg-[var(--discco-accent)] rounded" />
        {/* Category tabs */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex-1 h-3 bg-[var(--discco-taupe)] rounded-full opacity-40" />
          ))}
        </div>
        {/* Menu rows */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-1.5 p-1 bg-[var(--discco-bone)] rounded">
            <div className="w-6 h-6 bg-[var(--discco-accent)] rounded opacity-60" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 bg-[var(--discco-ink)] rounded w-3/4" />
              <div className="h-1 bg-[var(--discco-taupe)] rounded w-1/2 opacity-50" />
            </div>
            <div className="h-3 bg-[var(--discco-ink)] rounded px-1.5" />
          </div>
        ))}
        {/* Button */}
        <div className="h-5 bg-[var(--discco-ink)] rounded mt-2" />
      </div>
    );
  }

  if (mockupType === 'catalogo') {
    return (
      <div className="p-2">
        <div className="grid grid-cols-2 gap-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-square bg-[var(--discco-bone)] rounded overflow-hidden">
              <div className="w-full h-1/2 bg-[var(--discco-taupe)] opacity-30" />
              <div className="p-1 space-y-0.5">
                <div className="h-1 bg-[var(--discco-ink)] rounded w-3/4" />
                <div className="h-1 bg-[var(--discco-taupe)] rounded w-1/2 opacity-50" />
              </div>
            </div>
          ))}
        </div>
        <div className="h-4 bg-[var(--discco-accent)] rounded mt-1.5 opacity-70" />
      </div>
    );
  }

  // landing or brand-hub — simplified hero on phone
  return (
    <div className="p-2 space-y-1.5">
      <div className="h-10 bg-[var(--discco-accent)] rounded opacity-70" />
      <div className="space-y-1">
        <div className="h-1.5 bg-[var(--discco-ink)] rounded w-full" />
        <div className="h-1.5 bg-[var(--discco-ink)] rounded w-3/4" />
      </div>
      <div className="grid grid-cols-2 gap-1">
        <div className="h-8 bg-[var(--discco-charcoal)] rounded opacity-20" />
        <div className="h-8 bg-[var(--discco-charcoal)] rounded opacity-20" />
      </div>
    </div>
  );
}

function DesktopContent({ mockupType }: { mockupType: DeviceMockupProps['mockupType'] }) {
  if (mockupType === 'menu-digital') {
    return (
      <div className="p-3 space-y-2">
        <div className="h-12 bg-[var(--discco-accent)] rounded" />
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex-1 h-3 bg-[var(--discco-taupe)] rounded-full opacity-40" />
          ))}
        </div>
        <div className="space-y-1.5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 p-1.5 bg-[var(--discco-bone)] rounded">
              <div className="w-8 h-8 bg-[var(--discco-accent)] rounded opacity-60" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 bg-[var(--discco-ink)] rounded w-2/3" />
                <div className="h-1 bg-[var(--discco-taupe)] rounded w-1/3 opacity-50" />
              </div>
              <div className="h-3 bg-[var(--discco-ink)] rounded px-2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mockupType === 'landing') {
    return (
      <div className="p-3 space-y-2">
        <div className="h-16 bg-[var(--discco-accent)] rounded w-3/4" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-12 bg-[var(--discco-charcoal)] rounded opacity-20" />
          <div className="h-12 bg-[var(--discco-charcoal)] rounded opacity-20" />
          <div className="h-12 bg-[var(--discco-charcoal)] rounded opacity-20" />
        </div>
        <div className="h-8 bg-[var(--discco-ink)] rounded" />
      </div>
    );
  }

  if (mockupType === 'catalogo') {
    return (
      <div className="p-3">
        <div className="grid grid-cols-3 gap-2 mb-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square bg-[var(--discco-bone)] rounded overflow-hidden">
              <div className="w-full h-1/2 bg-[var(--discco-taupe)] opacity-30" />
            </div>
          ))}
        </div>
        <div className="h-6 bg-[var(--discco-accent)] rounded opacity-70" />
      </div>
    );
  }

  // brand-hub
  return (
    <div className="flex h-full">
      <div className="w-8 bg-[var(--discco-bone)] border-r border-[var(--discco-line)] p-1.5 space-y-1.5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-5 h-5 bg-[var(--discco-taupe)] rounded opacity-40" />
        ))}
      </div>
      <div className="flex-1 p-2 space-y-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-8 bg-[var(--discco-bone)] rounded p-1">
            <div className="h-1 bg-[var(--discco-taupe)] rounded w-full opacity-30" />
          </div>
        ))}
        <div className="grid grid-cols-3 gap-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square bg-[var(--discco-accent)] rounded opacity-40" />
          ))}
        </div>
      </div>
    </div>
  );
}
