import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  // Separate Framer Motion gesture props to avoid type conflicts with native onDrag etc.
  onDrag,
  onDragStart,
  onDragEnd,
  onDragCapture,
  onDragEnter,
  onDragExit,
  onDragLeave,
  onDragOver,
  ...restProps // Everything else (including native onClick, disabled, etc.)
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-medium tracking-wide font-sans rounded-none";

  const variants = {
    primary: "bg-luxury-gold text-white hover:bg-white hover:text-luxury-gold border border-luxury-gold shadow-lg shadow-luxury-gold/20",
    outline: "bg-transparent border border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white",
    ghost: "bg-transparent text-luxury-charcoal hover:text-luxury-gold hover:bg-rose-50/50"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      // Only pass Framer gesture handlers if you actually use them (optional)
      // onDrag={onDrag}
      // onDragStart={onDragStart}
      // etc.
      {...restProps} // Safe spread – no conflicting onDrag
    >
      {children}
    </motion.button>
  );
};

export default Button;
