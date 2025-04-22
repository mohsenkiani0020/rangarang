"use client"
function error({ error }: { error: Error }) {
  return <div className="w-full h-[55vh] flex justify-center items-center text-red-500 text-4xl">{error.message}</div>;
}

export default error;
