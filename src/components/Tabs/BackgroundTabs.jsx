import React, { useState } from 'react';

import { Copy } from 'lucide-react';
import { Button } from '../ui/button';
import UsemeBg from '../common/UsemeBg';
const backgrounds = [
  {
    id: 1,
    style: {
      background: 'radial-gradient(140% 140% at 45% 12%, #f8fafc 35%, #7c3aed 100%)',
    },
    code: `<div className="absolute inset-0 z-0" style={{ background: "radial-gradient(140% 140% at 45% 12%, #f8fafc 35%, #7c3aed 100%)" }} />`,
  },
  {
    id: 2,
    style: {
      background: 'radial-gradient(130% 130% at 48% 88%, #f0fdf4 38%, #0ea5e9 100%)',
    },
    code: `<div className="absolute inset-0 z-0" style={{ background: "radial-gradient(130% 130% at 48% 88%, #f0fdf4 38%, #0ea5e9 100%)" }} />`,
  },
  {
    id: 3,
    style: {
      background: 'radial-gradient(130% 130% at 52% 85%, #f1f5f9 36%, #1e293b 100%)',
    },
    code: `<div className="absolute inset-0 z-0" style={{ background: "radial-gradient(130% 130% at 52% 85%, #f1f5f9 36%, #1e293b 100%)" }} />`,
  },
  {
    id: 4,
    style: {
      background: 'radial-gradient(135% 135% at 30% 90%, #f0fdfa 38%, #0d9488 100%)',
    },
    code: `<div className="absolute inset-0 z-0" style={{ background: "radial-gradient(135% 135% at 30% 90%, #f0fdfa 38%, #0d9488 100%)" }} />`,
  },
  {
    id: 5,
    style: {
      background: 'radial-gradient(130% 130% at 70% 92%, #fef2f8 35%, #db2777 100%)',
    },
    code: `<div className="absolute inset-0 z-0" style={{ background: "radial-gradient(130% 130% at 70% 92%, #fef2f8 35%, #db2777 100%)" }} />`,
  },
  {
    id: 6,
    style: {
      background: 'radial-gradient(130% 130% at 20% 90%, #fff7ed 38%, #d97706 100%)',
    },
    code: `<div className="absolute inset-0 z-0" style={{ background: "radial-gradient(130% 130% at 20% 90%, #fff7ed 38%, #d97706 100%)" }} />`,
  },
  {
    id: 7,
    style: {
      background: 'radial-gradient(140% 140% at 80% 10%, #ecfdf5 35%, #059669 100%)',
    },
    code: `<div className="absolute inset-0 z-0" style={{ background: "radial-gradient(140% 140% at 80% 10%, #ecfdf5 35%, #059669 100%)" }} />`,
  },
];

/* style: background for inline preview

code: string for copy functionality

id: unique for mapping */

const BackgroundTabs = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {backgrounds.map((bg) => (
        <UsemeBg key={bg.id} style={bg.style} code={bg.code} />
      ))}
    </div>
  );
};

export default BackgroundTabs;