/* eslint-disable no-trailing-spaces */

import {spawn} from 'child_process';
import {createPathTemp} from '../service/controllers/utils.controller';

const [, , firstParam, secondParam, thirdParam, fourthParam] = process.argv;


const sendDataToOS = (inputVideoSource: string) => {
  const inputVideoSrc = `${__dirname}/${inputVideoSource}`;
  const outputVideoSrc = createPathTemp(inputVideoSource, 'mp4');

  const principalCommand = 'ffmpeg';
  const args = [
    '-fflags',
    '+genpts',
    '-i',
    `${inputVideoSrc}`,
    '-r',
    '24',
    `${outputVideoSrc}`];
  const options = {
    shell: true,
  };

  const child = spawn(principalCommand, args, options);

  child.stdout.on('data', (data) => {
    console.log(`Output: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.log(`LogLevel: ${data}`);
  });

  child.on('close', (code) => {
    console.log('🚀 ~ file: index.ts ~ line 25 ~ child.on ~ code', code);
  });

  console.log(outputVideoSrc);
};

export const writeDataToFile = (data: string, fileName: string) => {
  const principalCommand = 'echo';
  const args = [data, `> ${fileName}`];
  const options = {
    shell: true,
  };

  const child = spawn(principalCommand, args, options);

  child.stdout.on('data', (data) => {
    console.log(`Output: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.log(`LogLevel: ${data}`);
  });

  child.on('close', (code) => {
    console.log(code);
  });
};

export const concatVideos = (nameFileList: string, outputVideoSrc: string) => {
  const principalCommand = 'ffmpeg';
  const args = [
    '-f',
    'concat',
    '-safe',
    '0',
    '-i',
    `${nameFileList}`,
    '-c',
    'copy',
    `${outputVideoSrc}`];
  const options = {
    shell: true,
  };

  const child = spawn(principalCommand, args, options);

  child.stdout.on('data', (data) => {
    console.log(`Output: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.log(`LogLevel: ${data}`);
  });

  child.on('close', (code) => {
    console.log(code);
  });
};


// writeDataToFile(firstParams, secondParams);

// sendDataToOS(firstParams);
