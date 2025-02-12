import {UserInfoItem} from "./index";

const UserInfoSection = ({ userInfoFields, dataInfo }) => {
    return (
      <>
        {userInfoFields.map((field, index) => (
          <UserInfoItem key={index} label={field.label} value={field.value(dataInfo)} />
        ))}
      </>
    );
  };
  
export default UserInfoSection
  