const SignIn = () => {
  return (
    <>
      <h1>PukimonGo! 로그인</h1>
      <form>
        <input type="email" placeholder="이메일" required />
        <input type="password" placeholder="비밀번호" required />
        <input type="submit" value="로그인" />
      </form>
    </>
  );
};

export default SignIn;
