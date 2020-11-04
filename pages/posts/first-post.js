import { useEffect } from "react";
import Head from "next/head";
import Footer from "../../components/layout";

const FirstPost = (props) => {
  useEffect(() => {
    console.log("PROPS: ", props);
  }, []);

  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <div>
        <h1>First Post</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis
          tellus in metus vulputate. Ac ut consequat semper viverra nam libero
          justo laoreet. Vestibulum morbi blandit cursus risus at ultrices mi
          tempus. Hac habitasse platea dictumst vestibulum rhoncus est
          pellentesque elit. Ornare arcu dui vivamus arcu. Augue eget arcu
          dictum varius duis at consectetur. Proin sagittis nisl rhoncus mattis.
          Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel.
          Sed vulputate mi sit amet mauris commodo quis imperdiet massa.
        </p>
        <style jsx>{`
          p {
            font-size: 20px;
            background-color: red;
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log("RESP: ", resp);
  return {
    props: { msg: "fack u", data: resp.json() },
  };
}

export default FirstPost;
