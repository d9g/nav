import React from "react";
import "./style.css";

export interface LinkProps {
  title: string;
  links: Array<{ link: string; name: string; id?: number }>;
}

const ArrayLink: React.FC<LinkProps> = (props) => {
  const links = props.links.map((link) => {
    return (
      <li key={link.id} className="card link-item">
        <a
          href={link.link}
          title={link.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      </li>
    );
  });
  const { title } = props;
  return (
    <div className="link-wrapper layout">
      <div>
        <h2 className="link-title" id={title}>
          <span className="link-wrapper__title">{title}</span>
        </h2>
        <ul className="links">{links}</ul>
      </div>
    </div>
  );
};

export default ArrayLink;
