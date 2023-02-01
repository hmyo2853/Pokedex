const SignUp = () => {
  return (
    <>
      <h1>PukimonGo! 회원 가입</h1>
      <form>
        <input
          type="text"
          placeholder="유저 이름"
          minLength={4}
          maxLength={10}
          required
        />
        <input type="email" placeholder="이메일" required />
        <input type="password" placeholder="비밀번호" required />
        <input type="submit" value="회원 가입" />
      </form>
    </>
  );
};

export default SignUp;
