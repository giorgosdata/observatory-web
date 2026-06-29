import { PortableText } from "@portabletext/react";

export default function PortableTextRenderer({ value }: { value: any }) {
  return (
    <div style={{ lineHeight: 1.9, fontSize: 18 }}>
      <PortableText
        value={value}
        components={{
          block: {
            h2: ({ children }) => <h2 style={{ marginTop: 28 }}>{children}</h2>,
            normal: ({ children }) => <p style={{ margin: "14px 0" }}>{children}</p>,
          },
          list: {
            bullet: ({ children }) => <ul style={{ paddingLeft: 20 }}>{children}</ul>,
            number: ({ children }) => <ol style={{ paddingLeft: 20 }}>{children}</ol>,
          },
          listItem: {
            bullet: ({ children }) => <li style={{ margin: "8px 0" }}>{children}</li>,
            number: ({ children }) => <li style={{ margin: "8px 0" }}>{children}</li>,
          },
          marks: {
            link: ({ children, value }) => (
              <a
                href={value?.href}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "underline" }}
              >
                {children}
              </a>
            ),
          },
        }}
      />
    </div>
  );
}
