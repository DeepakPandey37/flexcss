import React from 'react'
import UsemeBg from '../common/UsemeBg';
const gradients = [
  {
    id: 1,
    style: {
      backgroundImage: "radial-gradient(ellipse 65% 60% at 30% 10%, rgba(244, 63, 94, 0.28), transparent 70%)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(ellipse 65% 60% at 30% 10%, rgba(244, 63, 94, 0.28), transparent 70%)" }} />`,
  },
  {
    id: 2,
    style: {
      backgroundImage: "radial-gradient(ellipse 75% 55% at 50% 90%, rgba(99, 102, 241, 0.32), transparent 70%)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(ellipse 75% 55% at 50% 90%, rgba(99, 102, 241, 0.32), transparent 70%)" }} />`,
  },
  {
    id: 3,
    style: {
      backgroundImage: "radial-gradient(ellipse 60% 60% at 75% 50%, rgba(52, 211, 153, 0.27), transparent 70%)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(ellipse 60% 60% at 75% 50%, rgba(52, 211, 153, 0.27), transparent 70%)" }} />`,
  },
  {
    id: 4,
    style: {
      backgroundImage: "radial-gradient(ellipse 70% 60% at 90% 0%, rgba(56, 189, 248, 0.25), transparent 70%)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(ellipse 70% 60% at 90% 0%, rgba(56, 189, 248, 0.25), transparent 70%)" }} />`,
  },
  {
    id: 5,
    style: {
      backgroundImage: "radial-gradient(ellipse 60% 55% at 10% 100%, rgba(251, 191, 36, 0.25), transparent 70%)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(ellipse 60% 55% at 10% 100%, rgba(251, 191, 36, 0.25), transparent 70%)" }} />`,
  },
  {
    id: 6,
    style: {
      backgroundImage: "radial-gradient(circle 500px at 60% 40%, rgba(236, 72, 153, 0.3), transparent)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(circle 500px at 60% 40%, rgba(236, 72, 153, 0.3), transparent)" }} />`,
  },
  {
    id: 7,
    style: {
      backgroundImage: "radial-gradient(circle 600px at 40% 75%, rgba(255, 115, 179, 0.28), transparent)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(circle 600px at 40% 75%, rgba(255, 115, 179, 0.28), transparent)" }} />`,
  },
  {
    id: 8,
    style: {
      backgroundImage: "radial-gradient(circle 500px at 20% 30%, rgba(168, 85, 247, 0.25), transparent)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(circle 500px at 20% 30%, rgba(168, 85, 247, 0.25), transparent)" }} />`,
  },
  {
    id: 9,
    style: {
      backgroundImage: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(132, 204, 22, 0.2), transparent 70%)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(132, 204, 22, 0.2), transparent 70%)" }} />`,
  },
  {
    id: 10,
    style: {
      backgroundImage: "radial-gradient(ellipse 60% 70% at 85% 90%, rgba(251, 146, 60, 0.22), transparent 70%)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(ellipse 60% 70% at 85% 90%, rgba(251, 146, 60, 0.22), transparent 70%)" }} />`,
  },
  {
    id: 11,
    style: {
      backgroundImage: "radial-gradient(circle 500px at 10% 60%, rgba(14, 165, 233, 0.25), transparent)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(circle 500px at 10% 60%, rgba(14, 165, 233, 0.25), transparent)" }} />`,
  },
  {
    id: 12,
    style: {
      backgroundImage: "radial-gradient(circle 450px at 85% 20%, rgba(190, 24, 93, 0.28), transparent)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(circle 450px at 85% 20%, rgba(190, 24, 93, 0.28), transparent)" }} />`,
  },
  {
    id: 13,
    style: {
      backgroundImage: "radial-gradient(ellipse 60% 60% at 25% 85%, rgba(16, 185, 129, 0.22), transparent 70%)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(ellipse 60% 60% at 25% 85%, rgba(16, 185, 129, 0.22), transparent 70%)" }} />`,
  },
  {
    id: 14,
    style: {
      backgroundImage: "radial-gradient(ellipse 70% 50% at 75% 75%, rgba(125, 211, 252, 0.2), transparent 70%)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(ellipse 70% 50% at 75% 75%, rgba(125, 211, 252, 0.2), transparent 70%)" }} />`,
  },
  {
    id: 15,
    style: {
      backgroundImage: "radial-gradient(circle 600px at 55% 10%, rgba(109, 40, 217, 0.25), transparent)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(circle 600px at 55% 10%, rgba(109, 40, 217, 0.25), transparent)" }} />`,
  },
  {
    id: 16,
    style: {
      backgroundImage: "radial-gradient(circle 550px at 35% 85%, rgba(244, 114, 182, 0.24), transparent)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(circle 550px at 35% 85%, rgba(244, 114, 182, 0.24), transparent)" }} />`,
  },
  {
    id: 17,
    style: {
      backgroundImage: "radial-gradient(circle 600px at 65% 35%, rgba(147, 197, 253, 0.25), transparent)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(circle 600px at 65% 35%, rgba(147, 197, 253, 0.25), transparent)" }} />`,
  },
  {
    id: 18,
    style: {
      backgroundImage: "radial-gradient(circle 600px at 70% 65%, rgba(202, 138, 4, 0.25), transparent)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(circle 600px at 70% 65%, rgba(202, 138, 4, 0.25), transparent)" }} />`,
  },
  {
    id: 19,
    style: {
      backgroundImage: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(147, 51, 234, 0.3), transparent 70%)",
    },
    code: `<div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(147, 51, 234, 0.3), transparent 70%)" }} />`,
  }
];


const GradiantTab = () => {
  return (
    <div className='max-w-7xl grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-6'>
      {gradients.map((gd)=>(
        <UsemeBg id={gd.id} style={gd.style} code={gd.code}/>
      ))}
    </div>
  )
}

export default GradiantTab