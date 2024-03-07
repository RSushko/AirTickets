export default function page() {
  return (
    <div className="container_inner flex">
      <div className="w-1/2"></div>
      <div className="w-1/2 bg-orange-100 pb-36">
        <p>Welcome back</p>
        <h1 className="text-2xl font-semibold mb-9">Login to your account</h1>
        <div className="flex flex-col">
          <button>Login now</button>
          <button className="bg-slate-300 border-2 text-gray-800 p-2">
            Continue with Google
          </button>
          <button className="bg-slate-300 border-2 text-gray-800 p-2">
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
}
