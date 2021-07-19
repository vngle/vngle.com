import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function FaqPage() {
  const faq = [
    {
      question: "What does the term grassroots mean?",
      answer:
        "Having to do with something that originates from common or ordinary people.",
    },
    {
      question: "What is grassroots news?",
      answer:
        "Pressing stories on demographic or geographic areas that usually go underrepresented if not reported by trained & verified locals (aka Vnglers).",
    },
    {
      question:
        "What is grassroots activism? (also called grassroots organizing)",
      answer:
        "The mobilization of a group of people, who are passionate about a pressing cause and harness the power of their conviction to push for a different outcome, often one that takes place in the group’s own community.",
    },
    {
      question: "What is a grassroots movement?",
      answer:
        "A movement involving the people in a given district, region, or community as the basis for a social, political, or economic action.",
    },
    {
      question: "What is a grassroots organization?",
      answer:
        "A union, institution, or association primarily made up of civilians advocating a cause to spur change at local, national, or international levels.",
    },
    {
      question: "What is a grassroots campaign?",
      answer:
        "A coordinated effort from a group of people who believe in a certain cause; that organize timely and coherent unified actions on behalf of a cause or to get a candidate elected.",
    },
    {
      question: "What is grassroots lobbying?",
      answer:
        "The act of influencing the general public to contact legislators and government officials concerning a specific issue at hand, with the intention of making a difference in their decision-making process.",
    },
  ];

  return (
    <Layout>
      <Seo title="Grassroots FAQs" />

      <Jumbotron className="bg-primary" as="section">
        <Container>
          <h1 className="mb-0">Grassroots FAQs</h1>
        </Container>
      </Jumbotron>

      <Container as="article">
        <section>
          <p>
            There’s many variations of grassroots work out there, and we get a
            lot of questions about it all. Here are some simple responses to a
            few frequently asked questions we hear:
          </p>
          {faq.map(({ question, answer }) => (
            <>
              <h2>{question}</h2>
              <p>{answer}</p>
            </>
          ))}
          <p>
            <b>
              If there are any other areas you believe could use more clarity
              feel free to leave us some feedback below, and our team will
              respond accordingly.
            </b>
          </p>
        </section>
      </Container>
    </Layout>
  );
}
