
import React from 'react';
import { Code, Palette, Users, Zap, Mail, MapPin } from 'lucide-react';

export const getIcon = (iconName: string) => {
  const icons: { [key: string]: React.ComponentType<any> } = {
    Code,
    Palette,
    Users,
    Zap,
    Mail,
    MapPin
  };

  return icons[iconName] || Code;
};
