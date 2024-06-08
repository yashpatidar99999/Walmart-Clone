import React, {useState} from "react";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="w-full h-[80vh] flex flex-col gap-y-4 items-center">
      <h2 className="text-[3rem]">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 justify-center h-full">
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="pt-4 pb-4 pl-2 outline-none rounded-[10px]"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          className="pt-4 pb-4 pl-2 outline-none rounded-[10px]"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          className="pt-4 pb-4 pl-2 outline-none rounded-[10px]"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="pt-4 pb-4 pl-2 outline-none rounded-[10px]"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-cyan-500 pt-4 pb-4 rounded-[30px]">Register</button>
      </form>
    </div>
  );
};

export default Register;