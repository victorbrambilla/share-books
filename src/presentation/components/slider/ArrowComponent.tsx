import { IconButton } from '@mui/material';

export function HorizontalScrollArrowComponent({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <IconButton color='primary' disabled={disabled} onClick={onClick}>
      {children}
    </IconButton>
  );
}
