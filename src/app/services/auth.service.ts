export class AuthService {
    isAuth = false;

    signin() {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    this.isAuth = true;
                    resolve(this.isAuth);
                }, 2000
            );
        });
    }

    signout() {
        this.isAuth = false;
    }
}
