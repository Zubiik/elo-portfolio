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
import { SkillsContainer, SkillCard, SkillInfo, SkillList } from "./styled";

const Skills = () => {
  return (
    <>
      <h1> Mes competences</h1>
      <SkillsContainer>
        <SkillCard>
          <h3>Front end</h3>
          <SkillList>
            <SkillInfo>
              <AiOutlineHtml5 size="5rem" color="black" />
              html
            </SkillInfo>
            <SkillInfo>
              <BiLogoCss3 size="5rem" color="black" />
              css
            </SkillInfo>
            <SkillInfo>
              <RiJavascriptFill size="5rem" color="black" />
              Javascript
            </SkillInfo>
            <SkillInfo>
              <BiLogoReact size="5rem" color="black" />
              React
            </SkillInfo>
            <SkillInfo>
              <BiLogoReact size="5rem" color="black" />
              React Native
            </SkillInfo>
            <SkillInfo>
              <SiExpo size="5rem" color="black" />
              Expo
            </SkillInfo>
            <SkillInfo>
              <BiLogoSass size="5rem" color="black" />
              Sass
            </SkillInfo>
            <SkillInfo>
              <SiStyledcomponents size="5rem" color="black" />
              Styled Component
            </SkillInfo>
          </SkillList>
        </SkillCard>
        <SkillCard>
          <h3>Back end</h3>
          <SkillList>
            <SkillInfo>
              <BiLogoPhp size="5rem" color="black" />
              Php
            </SkillInfo>
            <SkillInfo>
              <BiLogoNodejs size="5rem" color="black" />
              NodeJs
            </SkillInfo>
            <SkillInfo>
              <SiExpress size="5rem" color="black" />
              express
            </SkillInfo>
            <SkillInfo>
              <SiMysql size="5rem" color="black" />
              MySql
            </SkillInfo>
            <SkillInfo>
              <BiLogoMongodb size="5rem" color="black" />
              MongoDB
            </SkillInfo>
          </SkillList>
        </SkillCard>
        <SkillCard>
          <h3>Outils et environnement</h3>
          <SkillList>
            <SkillInfo>
              <TbBrandVscode size="5rem" color="black" />
              VsCode
            </SkillInfo>
            <SkillInfo>
              <BiGitBranch size="5rem" color="black" />
              Git
            </SkillInfo>
            <SkillInfo>
              <AiFillGithub size="5rem" color="black" />
              Github
            </SkillInfo>
            <SkillInfo>
              <AiOutlineMacCommand size="5rem" color="black" />
              MacOS
            </SkillInfo>
            <SkillInfo>
              <SiLinux size="5rem" color="black" />
              Linux
            </SkillInfo>
            <SkillInfo>
              <SiPostman size="5rem" color="black" />
              Postman
            </SkillInfo>
            <SkillInfo>
              <SiFigma size="5rem" color="black" />
              Figma
            </SkillInfo>
          </SkillList>
        </SkillCard>
      </SkillsContainer>
    </>
  );
};

export default Skills;
