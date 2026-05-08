import Image from "next/image";
import styles from "./PageVisual.module.css";

type PageVisualProps = {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  caption: string;
  chips?: string[];
};

export function PageVisual({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  caption,
  chips = [],
}: PageVisualProps) {
  return (
    <aside className={styles.panel}>
      <div className={styles.mediaWrap}>
        <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 960px) 100vw, 340px" />
      </div>

      <div className={styles.text}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.caption}>{caption}</p>

        {chips.length > 0 && (
          <ul className={styles.chips}>
            {chips.map((chip) => (
              <li key={chip} className={styles.chip}>
                {chip}
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
