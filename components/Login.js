import Logo from '../components/header/Logo';
import Image from 'next/image';
import { supabase } from '../services/supabaseClient';
import Loading from './Loading';
import { useEffect, useState } from 'react';

const style = {
  wrapper: 'flex min-h-screen flex-col items-center justify-center space-y-2',
  loginBtn:
    'group flex items-center space-x-4 rounded border-gray-300 border p-4 hover:bg-white',
  loginBtnText: 'font-bold group-hover:text-black',
};

const Login = () => {
  const signInWithGoogle = async () => {
    try {
      await supabase.auth.signIn({
        provider: 'google',
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={style.wrapper}>
      <div className='mb-10'>
        <Logo />
      </div>
      <button className={style.loginBtn} onClick={signInWithGoogle}>
        <Image
          src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
          height={24}
          width={24}
          alt='google'
        />
        <span className={style.loginBtnText}>Sign In with Google</span>
      </button>
    </div>
  );
};

export default Login;
