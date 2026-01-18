import { Fab } from '@mui/material';

function FloatingButton({ children, onClick }) {
  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };

  return (
    <Fab sx={fabStyle} color="primary" aria-label="add" onClick={onClick}>
      {children}
    </Fab>
  );
}

export default FloatingButton;
