import socialMedia from "@data/social-media.json";
import SocialLink from "@components/social-link";

const SocialIcons = () => {
    return (
        <ul className="tt-social-icon">
            {socialMedia.map(social => (
                <li key={social.id}>
                    <SocialLink
                        url={social.url}
                        className={social.iconClass}
                    />
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;