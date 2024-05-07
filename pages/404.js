import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1);
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>That page could not be found.</h2>
      <p>
        Go pack to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
