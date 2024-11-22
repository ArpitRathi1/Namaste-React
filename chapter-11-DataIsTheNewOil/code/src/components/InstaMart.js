import React, { useState } from "react";

// We want our accorden to show one at a time.
// means is we click on one show buttom it should collapes there arrorden.
// We can do this by lifting the state up.
// Because all the section have there own state, thay are controlling themself.
// Now what if do is, instead of children(Section) controlling there own state, there parent(InstaMart) will controll the state.

const Section = ({ title, desc, isVisible, setIsVisible }) => {

  return (
    <div className="border border-black p-2 m-2">
      <h3 className="text-xl font-bold">{title}</h3>
      {isVisible ? (
        <button
          className="text-blue-700"
          onClick={() => setIsVisible()}
        >
          Hide
        </button>
      ) : (
        <button
          className="text-blue-700"
          onClick={() => setIsVisible()}
        >
          Show
        </button>
      )}
      {isVisible ? <p>{desc}</p> : null}
    </div>
  );
};
const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("about")
  return (
    <div>
      <h1 className="text-3xl font-bold p-2 m-2 ">InstaMart</h1>
      <Section
        title={"About Instamart"}
        desc={
          "This is about section of instamart.  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => {visibleSection !== "about" ? setVisibleSection("about") : setVisibleSection("")}}
      />
      <Section
        title={"Team Instamart"}
        desc={
          "This is team section of instamart. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => {visibleSection !== "team" ? setVisibleSection("team") : setVisibleSection("")}}
      />
      <Section
        title={"Careers Instamart"}
        desc={
          "This is Careers section of instamart. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => {visibleSection !== "career" ? setVisibleSection("career") : setVisibleSection("")}}
      />
    </div>
  );
};

export default InstaMart;
