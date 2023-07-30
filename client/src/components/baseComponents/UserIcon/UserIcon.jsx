import { Tooltip, Button } from "@nextui-org/react";
import PropTypes from 'prop-types';


const UserIcon = ({userEmail='logado'}) => {
  return (
    <>
      <Tooltip content={`Usuario: ${userEmail}`} placement="bottom" trigger="hover"> 
        <Button auto flat>
          <img src='../../../../public/assets/User.png' alt='user icon'/>
        </Button>
      </Tooltip>
    </>
  );
};

UserIcon.propTypes = {
  userEmail: PropTypes.string
};


export default UserIcon;