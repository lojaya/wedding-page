import CurvedSeparator from "./curved-separator.svg";
import MessageForm from "./message-form";
import MessageBox from "./message-box";

export default function Messages({ title, subtitle, formConfig, messages }) {
  return (
    <section id="messages" className="text-center">
      <div className="container spacer-double-lg">
        <div className="row justify-content-center">
          <div className="col">
            <div className="mb-5 pb-5">
              <h1 className="display-4 mb-0">{title}</h1>
              <p className="w-md-40 mb-0 mx-auto text-dark-gray opacity-8">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <MessageForm config={formConfig} />
          <MessageBox data={messages} />
        </div>
      </div>
      <div className="curved-decoration">
        <CurvedSeparator
          className="bg-secondary-svg"
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
}
