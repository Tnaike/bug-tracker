import React, { ReactNode } from 'react';

interface NavigationProps {
  children: ReactNode;
}

function Navigation({ children }: NavigationProps) {
  const filteredChildren = React.Children.toArray(children).filter(Boolean);

  if (filteredChildren.length === 0) {
    return null;
  }

  return (
    <nav className="flex flex-col gap-2">
      <ul>
        {filteredChildren.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
