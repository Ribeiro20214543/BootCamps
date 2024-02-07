(() => {
  const user = {
    name: "Patrick",
    lastName: "Ribeiro"
  };

  function getUserWithFullName(user) {
    return {
      ...user,
      fullName: `${user.name} ${user.lastName}`
    };
  }

  const userWithFullName = getUserWithFullName(user);
})();