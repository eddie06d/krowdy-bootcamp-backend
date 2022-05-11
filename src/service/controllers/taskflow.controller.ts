/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

import { concatVideos, writeDataToFile } from '../../internalapp';
import { videoFlowController } from './videoflow.controller';

class TASKFLOW {
  async executeProcess(inputVideoSources: string[]) {
    try {
        // Prefijo del path de la ubicación de los videos
        const pathPrefix = 'C:\\Users\\Ingre\\OneDrive\\Escritorio\\Krowdy-Academy\\bootcamp-mayo-backend\\';
        // Nombre del archivo de salida de la unión del 1 y 4 video
        const outputVideoSrc1 = `${inputVideoSources[0]}-${inputVideoSources[3]}.webm`;
        // Nombre del archivo de salida de la unión del 2 y video
        const outputVideoSrc2 = `${inputVideoSources[1]}-${inputVideoSources[2]}.webm`;
        // Creación del archivo de unión del video 1 y 4
        writeDataToFile(`file ${inputVideoSources[0]}\nfile ${inputVideoSources[3]}`, '1proceso.txt');
        // Unión del video 1 y 4
        concatVideos('1proceso.txt', outputVideoSrc1);
        // Creación del archivo de unión del video 2 y 3
        writeDataToFile(`file ${inputVideoSources[1]}\nfile ${inputVideoSources[2]}`, '2proceso.txt');
        // Unión del video 2 y 3
        concatVideos('2proceso.txt', outputVideoSrc2);
        // Creación del archivo de unión de las uniones del los videos 1 y 4 y 2 y 3
        writeDataToFile(`file ${pathPrefix+outputVideoSrc1}`, '3proceso.txt');
        // Unión de las uniones de los vídeos 1 y 4 y 2 y 3
        concatVideos('3proceso.txt', 'outputFinal.webm');
        // Procesamiento del video final
        await videoFlowController.executeProcess(pathPrefix+'outputFinal.webm');
    } catch (error) {
      throw error;
    }
  }
}

const taskFlowController = new TASKFLOW();

export {
  taskFlowController,
};
