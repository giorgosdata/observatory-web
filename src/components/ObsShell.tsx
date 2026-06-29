import React from "react";

export default function ObsShell({
  title,
  subtitle,
  children,
}: {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="obsRoot">
      <section className="obsContainer">
        {title ? <h1 className="obsTitle">{title}</h1> : null}
        {subtitle ? <p className="obsSubtitle">{subtitle}</p> : null}

        <section className="obsCard">{children}</section>
      </section>
    </main>
  );
}
