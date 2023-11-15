import React from "react";
import {
  AiOutlineHtml5,
  AiFillGithub,
  AiOutlineMacCommand,
} from "react-icons/ai";
import { RiJavascriptFill } from "react-icons/ri";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoSass,
  BiLogoPhp,
  BiLogoNodejs,
  BiLogoMongodb,
  BiGitBranch,
} from "react-icons/bi";
import {
  SiStyledcomponents,
  SiExpo,
  SiExpress,
  SiMysql,
  SiLinux,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import {
  SkillsContainer,
  SkillCard,
  SkillInfo,
  SkillList,
  InfoTitle,
} from "./styled";

const Skills = () => {
  return (
    <>
      <h1> Mes competences</h1>
      <SkillsContainer>
        <SkillCard>
          <InfoTitle>Front end</InfoTitle>
          <SkillList>
            <SkillInfo>
              <AiOutlineHtml5 size="4rem" color="black" />
              html
            </SkillInfo>
            <SkillInfo>
              <BiLogoCss3 size="4rem" color="black" />
              css
            </SkillInfo>
            <SkillInfo>
              <RiJavascriptFill size="4rem" color="black" />
              Javascript
            </SkillInfo>
            <SkillInfo>
              <BiLogoReact size="4rem" color="black" />
              React
            </SkillInfo>
            <SkillInfo>
              <BiLogoReact size="4rem" color="black" />
              React <br />
              Native
            </SkillInfo>
            <SkillInfo>
              <SiExpo size="4rem" color="black" />
              Expo
            </SkillInfo>
            <SkillInfo>
              <BiLogoSass size="4rem" color="black" />
              Sass
            </SkillInfo>
            <SkillInfo>
              <SiStyledcomponents size="4rem" color="black" />
              Styled <br />
              Component
            </SkillInfo>
          </SkillList>
        </SkillCard>
        <SkillCard>
          <InfoTitle>Back end</InfoTitle>
          <SkillList>
            <SkillInfo>
              <BiLogoPhp size="4rem" color="black" />
              Php
            </SkillInfo>
            <SkillInfo>
              <BiLogoNodejs size="4rem" color="black" />
              NodeJs
            </SkillInfo>
            <SkillInfo>
              <SiExpress size="4rem" color="black" />
              express
            </SkillInfo>
            <SkillInfo>
              <SiMysql size="4rem" color="black" />
              MySql
            </SkillInfo>
            <SkillInfo>
              <BiLogoMongodb size="4rem" color="black" />
              MongoDB
            </SkillInfo>
          </SkillList>
        </SkillCard>
        <SkillCard>
          <InfoTitle>Outils et environnement</InfoTitle>
          <SkillList>
            <SkillInfo>
              <TbBrandVscode size="4rem" color="black" />
              VsCode
            </SkillInfo>
            <SkillInfo>
              <BiGitBranch size="4rem" color="black" />
              Git
            </SkillInfo>
            <SkillInfo>
              <AiFillGithub size="4rem" color="black" />
              Github
            </SkillInfo>
            <SkillInfo>
              <AiOutlineMacCommand size="4rem" color="black" />
              MacOS
            </SkillInfo>
            <SkillInfo>
              <SiLinux size="4rem" color="black" />
              Linux
            </SkillInfo>
            <SkillInfo>
              <SiPostman size="4rem" color="black" />
              Postman
            </SkillInfo>
            <SkillInfo>
              <SiFigma size="4rem" color="black" />
              Figma
            </SkillInfo>
          </SkillList>
        </SkillCard>
      </SkillsContainer>
    </>
  );
};

export default Skills;
