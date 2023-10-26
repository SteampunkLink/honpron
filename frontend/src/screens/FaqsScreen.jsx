import { useGetFaqsQuery } from "../slices/faqsApiSlice";
import Meta from "../components/Meta";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";

const FaqsScreen = () => {
  const { data: faqData, isLoading, error } = useGetFaqsQuery();
  return (
    <>
      <Meta />
      {error && <ErrorMsg error={error} />}
      {isLoading && <Loading />}
      <div className="display-box">
        <h2>FAQS</h2>
        {faqData?.length && (
          <div className="faq-container">
            {faqData.map((faq, idx) => (
              <div key={idx}>
                <div className="faq-q">{faq.question}</div>
                <div className="faq-a">{faq.answer}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FaqsScreen;
