import { Button, Label, TextInput } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div>
            <div>
                <Helmet>
                    <title>StudySync | Login</title>
                </Helmet>
                <div className="flex flex-col w-full items-center justify-center min-h-[500px] px-3">
                    <h2 className='mt-24 mb-8 text-4xl font-bold '>Please login</h2>
                    <form onSubmit={handleLogin} className="flex max-w-md w-full flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email2" value="Your email" />
                            </div>
                            <TextInput id="email2" type="email" name='email' placeholder="Your Email" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password2" value="Your password" />
                            </div>
                            <TextInput id="password2" type="password" name='password' placeholder='Your Password' required shadow />
                        </div>
                        <Button type="submit">Login</Button>
                        <input type="submit" value='login' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;