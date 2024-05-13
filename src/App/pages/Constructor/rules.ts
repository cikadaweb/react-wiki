// import axios from "axios";
// import { WzRequest } from "../../../../../../react-services";
// import { PLUGIN_PLATFORM_REQUEST_HEADERS } from "../../../../../../../common/constants";

export const PLUGIN_PLATFORM_REQUEST_HEADERS = {
  "osd-xsrf": "kibana",
};

type DECODERS = "decoders";
type LISTS = "lists";
type RULES = "rules";
export type Resource = DECODERS | LISTS | RULES;
export const RulesetResources = {
  DECODERS: "decoders",
  LISTS: "lists",
  RULES: "rules",
};

export const resourceDictionary = {
  [RulesetResources.DECODERS]: {
    resourcePath: "/decoders",
    permissionResource: (value: any) => `decoder:file:${value}`,
  },
  [RulesetResources.LISTS]: {
    resourcePath: "/lists",
    permissionResource: (value: any) => `list:file:${value}`,
  },
  [RulesetResources.RULES]: {
    resourcePath: "/rules",
    permissionResource: (value: any) => `rule:file:${value}`,
  },
};

export class RulesetHandler {
  resource: Resource;
  constructor(_resource: Resource) {
    this.resource = _resource;
  }

  private getResourcePath = () => {
    return `${resourceDictionary[this.resource].resourcePath}`;
  };

  private getResourceFilesPath = (fileName?: string) => {
    const basePath = `${this.getResourcePath()}/files`;
    return `${basePath}${fileName ? `/${fileName}` : ""}`;
  };

  /**
   * Get info of any type of resource Rules, Decoders, CDB lists...
   */
  async getResource(filters = {}) {
    try {
      console.log("getResource: ");
      // const result: any = await WzRequest.apiReq(
      //   "GET",
      //   this.getResourcePath(),
      //   filters
      // );
      // return (result || {}).data || false;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get the content of any type of file Rules, Decoders, CDB lists...
   * @param {String} fileName
   */
  async getFileContent(fileName: string) {
    try {
      console.log("getFileContent: ", fileName);
      // const result: any = await WzRequest.apiReq(
      //   "GET",
      //   this.getResourceFilesPath(fileName),
      //   {
      //     params: {
      //       raw: true,
      //     },
      //   }
      // );
      // return (result || {}).data || "";
    } catch (error) {
      throw error;
    }
  }

  async createFile(fileName: string, content: string) {
    try {
      console.log("createFile - fileName: ", fileName);
      console.log("createFile - content: ", content);
      const data = {
        command_type: "file",
        params: {
          mode: "write",
          path: `/tmp/example.txt`,
          content: `test text`,
        },
      };

      const options = {
        method: "POST",
        headers: {
          ...PLUGIN_PLATFORM_REQUEST_HEADERS,
          "content-type": "application/json",
        },
        url: "http://localhost:5603/api/command",
        data,
        timeout: 20000,
      };

      // await axios(options);
      // const result = await WzRequest.genericReq("POST", "/api/command");
      // return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  /**
   * Update the content of any type of file Rules, Decoders, CDB lists...
   * @param {String} fileName
   * @param {String} content
   * @param {Boolean} overwrite
   */
  async updateFile(fileName: string, content: string, overwrite: boolean) {
    try {
      console.log("updateFile - fileName: ", fileName);
      console.log("updateFile - content: ", content);
      console.log("updateFile - overwrite: ", overwrite);

      // return await WzRequest.apiReq(
      //   "PUT",
      //   this.getResourceFilesPath(fileName),
      //   {
      //     params: {
      //       overwrite,
      //     },
      //     body: content.toString(),
      //     origin: "raw",
      //   }
      // );
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete any type of file Rules, Decoders, CDB lists...
   * @param {Resource} resource
   * @param {String} fileName
   */
  async deleteFile(fileName: string) {
    const fullPath = `${resourceDictionary[this.resource].resourcePath}/files/${fileName}`;
    try {
      console.log("deleteFile: ", fullPath);
      // const result = await WzRequest.apiReq("DELETE", fullPath, {});
      // return result;
    } catch (error) {
      throw error;
    }
  }
}
