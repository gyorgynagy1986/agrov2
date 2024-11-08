import React from "react";
import Image from "next/image";
import styles from "./Contact.module.css";
import miniLogo from "../../../../public/assets/pages/icon.svg";
import teamMember from "../../../../public/assets/pages/team.png";

const Contact = ({languageData }) => {

const { termenyertesites, terulateiKepviselo, kulkerUzletkoto, logKordinator, markLogKor} = languageData;

    const teamData = [
        { 
          name: "Sasvári Viktória", 
          role: termenyertesites, 
          phone: "+36202477964", 
          email: "viktoria.sasvari@miragro.hu",
          photo: teamMember
        },
        { 
          name: "Égető Gábor", 
          role: terulateiKepviselo,
          phone: "+36707091827", 
          email: "gabor.egeto@miragro.hu",
          photo: teamMember
        },
        { 
          name: "Varga Norbert", 
          role: termenyertesites, 
          phone: "+36302819273", 
          email: "norbert.varga@miragro.hu",
          photo: teamMember
        },
        { 
          name: "Ladócki Attila", 
          role: kulkerUzletkoto, 
          phone: "+36301589244", 
          email: "attila.ladocki@miragro.hu",
          photo: teamMember
        },
        { 
          name: "Tóth Alexandra", 
          role: logKordinator, 
          phone: "+36706622750", 
          email: "alexandra.toth@noragro.hu",
          photo: teamMember
        },
        { 
          name: "Cserenyec Anikó", 
          role: terulateiKepviselo, 
          phone: "+36706622753", 
          email: "aniko.cserenyec@miragro.hu",
          photo: teamMember
        },
        { 
          name: "Daczi-Kemenes Petra", 
          role:  markLogKor, 
          phone: "+36706865130", 
          email: "petra.dkemenes@miragro.hu",
          photo: teamMember
        },
      ];

  return (
    <div className={styles.container}>
      <div className={styles.h1Container}>
        <h1 className={styles.h1}>Munkatársak</h1>
        <div className={styles.line}></div>
      </div>

      <div className={styles.containerTeam}>
        {teamData.slice(0, 3).map((member, index) => (
          <div key={index} className={styles.teamItemContainer}>
            <div className={styles.iamgeContainer}>
              <Image src={member.photo} alt={member.name}  />
            </div>
            <div className={styles.nameContainer}>
              <p className={styles.name}>{member.name}</p>
              <p className={styles.doing}>{member.role}</p>
            </div>
            <div>
              <Image src={miniLogo} alt="Mini Logo" />
            </div>
            <div className={styles.contactContainer}>
              <a href={`tel:${member.phone}`}>{member.phone}</a>
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.containerTeam2}>
        {teamData.slice(3).map((member, index) => (
          <div key={index} className={styles.teamItemContainer}>
            <div className={styles.iamgeContainer}>
              <Image src={member.photo} alt={member.name} />
            </div>
            <div className={styles.nameContainer}>
              <p className={styles.name}>{member.name}</p>
              <p className={styles.doing}>{member.role}</p>
            </div>
            <div>
              <Image src={miniLogo} alt="Mini Logo" />
            </div>
            <div className={styles.contactContainer}>
              <a href={`tel:${member.phone}`}>{member.phone}</a>
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
