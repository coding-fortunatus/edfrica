import { ContactDetails } from "@/components/ContactDetails";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/contact";
const title = "Contact Us";
const description =
  "Get in touch with Edfrica Solutions Limited — offices in Sokenu, Abeokuta South LGA, Ogun State, Nigeria. Email contact@edfrica.org or call +234 808 485 2235.";

export const metadata = buildMetadata({
  title,
  description,
  path,
  socialTitle: "Talk to the Edfrica team",
});

const crumbs = [{ name: "Contact", path }];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            path,
            name: title,
            description,
            type: "ContactPage",
            crumbs,
          }),
          breadcrumbNode(crumbs),
        ])}
      />
      <ContactDetails />
    </>
  );
}
