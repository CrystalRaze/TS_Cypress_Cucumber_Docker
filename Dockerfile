FROM cypress/browsers:node16.17.1-chrome106-ff105-edge
#Create the folder where our project will be stored
RUN mkdir /my-cypress-project
#We make it our workdirectory
WORKDIR /my-cypress-project
#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./cypress.env.json .
COPY ./.cypress-cucumber-preprocessorrc.json .
COPY ./cypress.config.ts .
COPY ./cucumber-html-report.js .
COPY ./cucumber-json-formatter .
COPY ./cypress ./cypress
COPY ./tsconfig.json .
#Install the cypress dependencies in the work directory
RUN npm install
RUN npm install esbuild
RUN chmod +x cucumber-json-formatter
#Executable commands the container will use[Exec Form]
ENTRYPOINT [""]
#With CMD in this case, we can specify more parameters to the last entrypoint.
CMD [""]