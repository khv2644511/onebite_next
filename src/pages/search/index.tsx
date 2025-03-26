import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  console.log(router);

  const { q } = router.query;
  // const q = router.query.q;

  return <h1>search {q}</h1>;
}
