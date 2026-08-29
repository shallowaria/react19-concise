import { Fab } from '@mui/material';

function FloatingButton({ children, onClick }) {
  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };

  return (
    <Fab color="primary" aria-label="add" sx={fabStyle} onClick={onClick}>
      {children}
    </Fab>
  );
}

export default FloatingButton;
