"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[6181],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5624:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],l={id:"versioning-releases",title:"ORCA Versioning and Releases",description:"Provides information to developers on semantic versioning and the release process."},s=void 0,p={unversionedId:"developer/development-guide/code/versioning-releases",id:"developer/development-guide/code/versioning-releases",title:"ORCA Versioning and Releases",description:"Provides information to developers on semantic versioning and the release process.",source:"@site/docs/developer/development-guide/code/versioning-releases.md",sourceDirName:"developer/development-guide/code",slug:"/developer/development-guide/code/versioning-releases",permalink:"/cumulus-orca/docs/developer/development-guide/code/versioning-releases",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/development-guide/code/versioning-releases.md",tags:[],version:"current",frontMatter:{id:"versioning-releases",title:"ORCA Versioning and Releases",description:"Provides information to developers on semantic versioning and the release process."},sidebar:"dev_guide",previous:{title:"Best Practices",permalink:"/cumulus-orca/docs/developer/development-guide/code/best-practices"},next:{title:"Running Pylint Against Your Code",permalink:"/cumulus-orca/docs/developer/development-guide/code/linting"}},d={},u=[{value:"Versioning",id:"versioning",level:2},{value:"Release Process",id:"release-process",level:2},{value:"Create a release branch",id:"create-a-release-branch",level:3},{value:"Update CHANGELOG.md",id:"update-changelogmd",level:3},{value:"Create a git tag for the release",id:"create-a-git-tag-for-the-release",level:3},{value:"Running the deployment",id:"running-the-deployment",level:3},{value:"Creating a Bamboo deployment plan branch",id:"creating-a-bamboo-deployment-plan-branch",level:4},{value:"Finalizing ORCA release on github",id:"finalizing-orca-release-on-github",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Delete and regenerate the tag",id:"delete-and-regenerate-the-tag",level:3},{value:"Deploying ORCA buckets, RDS cluster and Cumulus ORCA modules via bamboo",id:"deploying-orca-buckets-rds-cluster-and-cumulus-orca-modules-via-bamboo",level:2}],c={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Much of this documentation is also found at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/docs/development/release.md"},"Cumulus"),"."),(0,o.kt)("h2",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,"The ORCA team uses semantic versioning. More information about semantic\nversioning can be found ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"here"),"."),(0,o.kt)("h2",{id:"release-process"},"Release Process"),(0,o.kt)("h3",{id:"create-a-release-branch"},"Create a release branch"),(0,o.kt)("p",null,"From develop, create a new release branch from develop following the\n",(0,o.kt)("inlineCode",{parentName:"p"},"release-MAJOR.MINOR.x"),". For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"release-1.14.1"),". Push this branch\nto github if you created it locally."),(0,o.kt)("h3",{id:"update-changelogmd"},"Update CHANGELOG.md"),(0,o.kt)("p",null,"Update the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-orca/blob/master/CHANGELOG.md"},"CHANGELOG.md"),".\nPut a header under the 'Unreleased' section with the new version number and\nthe date."),(0,o.kt)("h3",{id:"create-a-git-tag-for-the-release"},"Create a git tag for the release"),(0,o.kt)("p",null,"Make sure you're on the latest commit of the release branch."),(0,o.kt)("p",null,"Create and push a new git tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    git tag -a vx.y.z -m "Release x.y.z"\n    git push origin vx.y.z\n')),(0,o.kt)("h3",{id:"running-the-deployment"},"Running the deployment"),(0,o.kt)("p",null,"Publishing of new releases is handled by a Bamboo release plan and is manually\ntriggered."),(0,o.kt)("p",null,"If you created a new release branch in step one, you will need to create a new\nbamboo deployment plan."),(0,o.kt)("h4",{id:"creating-a-bamboo-deployment-plan-branch"},"Creating a Bamboo deployment plan branch"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The deployment plan is already created in Bamboo using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nasa/cumulus-orca/tree/develop/bamboo-specs"},"Bamboo Specs"),"."),(0,o.kt)("li",{parentName:"ol"},"If you have updated the ",(0,o.kt)("inlineCode",{parentName:"li"},"bamboo.yaml")," config file, you will need to import the updated spec file from Bamboo specs UI. Under ",(0,o.kt)("inlineCode",{parentName:"li"},"Specs")," section, click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Set up Specs Repository"),". On the ",(0,o.kt)("inlineCode",{parentName:"li"},"Project Type"),", select ",(0,o.kt)("inlineCode",{parentName:"li"},"Build Project")," and then ",(0,o.kt)("inlineCode",{parentName:"li"},"ORCA"),". On the Specs repository, select the repository host as ",(0,o.kt)("inlineCode",{parentName:"li"},"orca-develop"),". Note that choosing the wrong repository branch will cause issues in deployment. ",(0,o.kt)("inlineCode",{parentName:"li"},"ORCA repo")," repository host is for ",(0,o.kt)("inlineCode",{parentName:"li"},"master")," branch and ",(0,o.kt)("inlineCode",{parentName:"li"},"orca test branch")," host is for ",(0,o.kt)("inlineCode",{parentName:"li"},"feature/ORCA-test-bamboo")," branch used for testing and prototyping. Contact ",(0,o.kt)("inlineCode",{parentName:"li"},"Venku Jayanti")," from CI/CD team for additional support."),(0,o.kt)("li",{parentName:"ol"},"In the ORCA project (",(0,o.kt)("a",{parentName:"li",href:"https://ci.earthdata.nasa.gov/browse/ORCA-OI"},"https://ci.earthdata.nasa.gov/browse/ORCA-OI"),"), scroll to the top left of the page where it indicates ",(0,o.kt)("inlineCode",{parentName:"li"},"Plan branch"),". From the ",(0,o.kt)("inlineCode",{parentName:"li"},"Plan branch")," dropdown menu, select the release branch you created for the release which should be in the format ",(0,o.kt)("inlineCode",{parentName:"li"},"release-X.X.X"),"."),(0,o.kt)("li",{parentName:"ol"},"Once inside the release branch page, scroll to the top right of the page and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Actions"),"-> ",(0,o.kt)("inlineCode",{parentName:"li"},"Configure branch"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("inlineCode",{parentName:"li"},"Plan branch configuration")," page, under ",(0,o.kt)("inlineCode",{parentName:"li"},"Plan branch configuration"),", enable 'Change Trigger'. Set the\nTrigger type to manual, and this will prevent commits to the branch from triggering the build plan."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Variables")," tab.\nEnsure that you are on your branch plan and not the master plan. Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Choose from inherited variables")," dropdown menu.\nexcept in special cases such as incompatible backport branches. Then add and set the following variables:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"}," * ORCA_VERSION: `<version number>`\n * RELEASE_FLAG: true\n * SECRET_GITHUB_EMAIL: `<secret github email>`\n * SECRET_GITHUB_TOKEN: `<secret github token>`\n * SECRET_GITHUB_USER: `<secret github user>`\n")),"   Contact ORCA team to know values of the three github variables."),(0,o.kt)("li",{parentName:"ol"},"Run the branch using the 'Run' button in the top right.")),(0,o.kt)("p",null,"Bamboo will build and run unit tests against that tagged release."),(0,o.kt)("h2",{id:"finalizing-orca-release-on-github"},"Finalizing ORCA release on github"),(0,o.kt)("p",null,"The release is automated in Bamboo, but the step must be manually started. If\nyou set the ",(0,o.kt)("inlineCode",{parentName:"p"},"RELEASE_FLAG")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and the build steps passed, you will\nbe able to run the manual 'Release' step in Bamboo. Make sure to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ORCA Integrator")," plan under ORCA on bamboo website for performing a release."),(0,o.kt)("p",null,"The CI release scripts will create a release based on the release version tag,\nas well as uploading release artifacts to the Github release for the Terraform\nmodules provided by Cumulus. The Terraform release artifacts include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A multi-module Terraform .zip artifact containing filtered copies of the\ntf-modules, packages, and tasks directories for use as Terraform module sources.")),(0,o.kt)("p",null,"Just make sure to verify the appropriate .zip files are present on Github after\nthe release process is complete."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Merge the base branch back into develop and master")),(0,o.kt)("p",null,"Finally, you need to merge the version update changes back into develop and\nmaster."),(0,o.kt)("p",null,"If this is the latest version, create the PRs to merge the release branch\ninto develop and master. "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note: ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Do not squash this merge. Doing so will make the "compare" view from step 4\nshow an incorrect diff, because the tag is linked to a specific commit on the\nbase branch.'))),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"delete-and-regenerate-the-tag"},"Delete and regenerate the tag"),(0,o.kt)("p",null,"To delete a published tag to re-tag, follow these steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    git tag -d vx.y.z\n    git push -d origin vx.y.z\n")),(0,o.kt)("h2",{id:"deploying-orca-buckets-rds-cluster-and-cumulus-orca-modules-via-bamboo"},"Deploying ORCA buckets, RDS cluster and Cumulus ORCA modules via bamboo"),(0,o.kt)("p",null,"For testing purposes, you should use your feature branch in cumulus-orca github repo and ",(0,o.kt)("a",{parentName:"p",href:"https://ci.earthdata.nasa.gov/browse/ORCA-PL"},(0,o.kt)("inlineCode",{parentName:"a"},"prototype-latest"))," bamboo plan so that it does not affect the ORCA github ",(0,o.kt)("inlineCode",{parentName:"p"},"develop")," branch. The ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype-latest")," bamboo plan is linked to ",(0,o.kt)("inlineCode",{parentName:"p"},"feature/ORCA-test-bamboo")," github branch as the default branch under cumulus-orca repo. In addition, if changes are made to the bamboo spec file ",(0,o.kt)("inlineCode",{parentName:"p"},"bamboo.yaml")," in this default branch, you have to manually import the bamboo spec by choosing ",(0,o.kt)("inlineCode",{parentName:"p"},"orca test branch")," as the linked repo."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You should reset ",(0,o.kt)("inlineCode",{parentName:"p"},"feature/ORCA-test-bamboo")," before using it."),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Rename ",(0,o.kt)("inlineCode",{parentName:"li"},"feature/ORCA-test-bamboo")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"feature/ORCA-test-bamboo-old")),(0,o.kt)("li",{parentName:"ol"},"Create a new branch based off of your branch named ",(0,o.kt)("inlineCode",{parentName:"li"},"feature/ORCA-test-bamboo")),(0,o.kt)("li",{parentName:"ol"},"In the new branch's ",(0,o.kt)("inlineCode",{parentName:"li"},"bamboo.yaml"),":\nDelete all but one of the plans.\nChange plan's ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"prototype-latest"),".\nIn each ",(0,o.kt)("inlineCode",{parentName:"li"},"repositories")," element, change ",(0,o.kt)("inlineCode",{parentName:"li"},"orca-develop")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"orca test branch"),".\nIn each ",(0,o.kt)("inlineCode",{parentName:"li"},"plan")," element, change ",(0,o.kt)("inlineCode",{parentName:"li"},"OI"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"ODP")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"key")," values to ",(0,o.kt)("inlineCode",{parentName:"li"},"PL"))))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"prototype-latest")," exposes an ordering issue where the release stage must be run before deployment/integration checks can be run.\nDO NOT RUN THE RELEASE STAGE FROM ",(0,o.kt)("inlineCode",{parentName:"p"},"PROTOTYPE-LATEST"),"\nComment the release stage out in ",(0,o.kt)("inlineCode",{parentName:"p"},"bamboo.yaml")," at the top of the file, and under ",(0,o.kt)("inlineCode",{parentName:"p"},"stages:"),". Note that indentation is not a reliable indicator of block length, so make sure that all release code, including ",(0,o.kt)("inlineCode",{parentName:"p"},"repositories"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"triggers"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"branches"),", are commented out."))),(0,o.kt)("p",null,"You will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ORCA Deploy Plan")," bamboo plan for deploying the resources. "),(0,o.kt)("p",null,"After hitting the play button on ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy DR ORCA Buckets")," stage in bamboo plan, but before hitting ",(0,o.kt)("inlineCode",{parentName:"p"},"Run")," in the popup, replace the following variables with yours."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PREFIX"),(0,o.kt)("li",{parentName:"ul"},"DR_AWS_ACCESS_KEY_ID"),(0,o.kt)("li",{parentName:"ul"},"DR_AWS_SECRET_ACCESS_KEY")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are targeting your personal feature branch, you may set these and future variables on the Plan Branch under ",(0,o.kt)("inlineCode",{parentName:"p"},"variables"),".\nOtherwise, keep personalized/sensitive values out of the main build."))),(0,o.kt)("p",null,"These are the ORCA buckets that will be created in the disaster recovery AWS account:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<PREFIX>-orca-primary")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<PREFIX>-orca-archive-worm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<PREFIX>-orca-reports")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<PREFIX>-dr-tf-state")," (for storing the terraform state file in DR account)")),(0,o.kt)("p",null,"Some of these buckets have cross-account IAM policies attached so that they can be accessed from the other cumulus sandbox."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Hitting 'play' next to ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy DR ORCA buckets"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy Dev RDS Stack")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy Dev Cumulus and ORCA Stack")," brings up a checkbox list to run multiple jobs at once. Note that none of the checkboxes should be checked."))),(0,o.kt)("p",null,"The Cumulus and TF buckets as well as dynamoDB table in cumulus OU account are created automatically in the Bamboo ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy ORCA Buckets and Cumulus/ORCA modules")," stage.\nThese are the buckets that will be created in cumulus OU account:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<PREFIX>-internal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<PREFIX>-level0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<PREFIX>-public")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<PREFIX>-private")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<PREFIX>-protected")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<PREFIX>-tf-state")," (for storing the terraform state file in cumulus OU account)")),(0,o.kt)("p",null,"After hitting the play button on ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy ORCA Buckets and Cumulus/ORCA modules"),", but before hitting ",(0,o.kt)("inlineCode",{parentName:"p"},"Run")," in the popup, replace the following variables with yours."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CUMULUS_AWS_ACCESS_KEY_ID"),(0,o.kt)("li",{parentName:"ul"},"CUMULUS_AWS_SECRET_ACCESS_KEY"),(0,o.kt)("li",{parentName:"ul"},"PREFIX"),(0,o.kt)("li",{parentName:"ul"},"DB_ADMIN_PASSWORD"),(0,o.kt)("li",{parentName:"ul"},"DB_USER_PASSWORD"),(0,o.kt)("li",{parentName:"ul"},"EARTHDATA_CLIENT_ID"),(0,o.kt)("li",{parentName:"ul"},"EARTHDATA_CLIENT_PASSWORD"),(0,o.kt)("li",{parentName:"ul"},"CUMULUS_ORCA_DEPLOY_TEMPLATE_VERSION")),(0,o.kt)("p",null,"This is because some variables are sensitive and some will vary depending upon the user running the pipeline. Hitting 'play' next to ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy DR ORCA buckets"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy ORCA Buckets and Cumulus/ORCA modules")," brings up a checkbox list to run multiple jobs at once. Note that none of the checkboxes should be checked."),(0,o.kt)("p",null,"The above buckets can also be created manually if desired by the user. Make sure to use the proper AWS access keys for configuration before running the commands."),(0,o.kt)("p",null,"The bucket can be created using the following CLI command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws s3api create-bucket --bucket <BUCKET_NAME>  --region us-west-2 --create-bucket-configuration LocationConstraint=us-west-2\n")),(0,o.kt)("p",null,"In addition to this, the dynamodb table and bucket version need to created as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"   aws dynamodb create-table \\\n      --table-name <PREFIX>-tf-locks \\\n      --attribute-definitions AttributeName=LockID,AttributeType=S \\\n      --key-schema AttributeName=LockID,KeyType=HASH \\\n      --billing-mode PAY_PER_REQUEST \\\n      --region us-west-2\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"      aws s3api put-bucket-versioning \\\n    --bucket <PREFIX>-tf-state \\\n    --versioning-configuration Status=Enabled\n")),(0,o.kt)("p",null,"Create an EC2 key pair can be created using the AWS CLI. Make sure to save the generated private key for connecting to this instance later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws ec2 create-key-pair --key-name <PREFIX> --query 'KeyMaterial' --output text > <PREFIX>.pem\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure your AWS is configured to use the cumulus sandbox account by using that account's AWS access keys before creating the EC2 key pair."))),(0,o.kt)("p",null,"A new earthdata application will need to be created if not done previously which will give the values for ",(0,o.kt)("inlineCode",{parentName:"p"},"EARTHDATA_CLIENT_ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EARTHDATA_CLIENT_PASSWORD"),". If you already have the application, use the existing values. ",(0,o.kt)("inlineCode",{parentName:"p"},"CUMULUS_ORCA_DEPLOY_TEMPLATE_VERSION")," is the branch you want to check out in the ",(0,o.kt)("a",{parentName:"p",href:"https://git.earthdata.nasa.gov/projects/ORCA/repos/cumulus-orca-deploy-template/browse"},"deployment repo")," such as ",(0,o.kt)("inlineCode",{parentName:"p"},"v11.1.1-v4.0.1"),"."),(0,o.kt)("p",null,"Note that the jobs may need to be run multiple times to get past deployment errors if there is one. If an error is raised saying ",(0,o.kt)("inlineCode",{parentName:"p"},"Cloudwatch log groups already exist"),", then manually delete all the cloudwatch log groups and corresponding lambdas having the same name as the log groups from the AWS console and retry running the job."))}m.isMDXComponent=!0}}]);