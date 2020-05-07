import React from "react";
import { UserList } from "./UserList";

export const AdminUserManage = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={styles.container}>
        <UserList style={styles.flexboxVertical} tag="admin" />
        <UserList style={styles.flexboxVertical} tag="owner" />
        <UserList style={styles.flexboxVertical} tag="worker" />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "50px 20px 20px 20px",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    height: "500px",
  },

  flexboxVertical: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
