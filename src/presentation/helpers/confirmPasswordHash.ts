import bcrypt from 'bcrypt';

export const confirmPasswordHash = (
  plainPassword: any,
  hashedPassword: any
) => {
  return new Promise((resolve) => {
    bcrypt.compare(
      plainPassword,
      hashedPassword,
      function (err: any, res: unknown) {
        resolve(res);
      }
    );
  });
};
