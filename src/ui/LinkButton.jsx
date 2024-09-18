import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const className = 'text-sm text-blue-500 hover:text-blue-600';

export default function LinkButton({ to, children }) {
  const navigate = useNavigate();

  if (to === '-1') {
    return (
      <button onClick={() => navigate(-1)} className={className}>
        &larr; Go back
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
