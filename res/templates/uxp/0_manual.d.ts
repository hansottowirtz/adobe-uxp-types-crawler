// Manually created by @thejustinwalsh and edited by @hansottowirtz
// From https://github.com/thejustinwalsh/uxp-types
declare module "uxp" {
  namespace dialog {
    function showOpenDialog(options?: {
      openFile?: boolean;
      openDirectory?: boolean;
      defaultPath?: string;
      multipleSelections?: boolean;
      title?: string;
      buttonLabel?: string;
      filters?: string[];
      showHiddenFiles?: boolean;
      initialLocation?: string;
    }): Promise<URL>;

    function showSaveDialog(options?: {
      defaultPath?: string;
      title?: string;
      buttonLabel?: string;
      filters: string[];
      showHiddenFiles?: boolean;
      suggestedName?: string;
      initialLocation?: string;
    }): Promise<URL>;
  }

  namespace entrypoints {
    function getCommand(...args: any[]): void;

    function getPanel(...args: any[]): void;

    function setup(...args: any[]): void;
  }

  namespace host {
    const uiLocale: string;
    const name: string;
    const version: string;
  }

  namespace shell {
    function openExternal(url: string | URL): void;
  }

  namespace storage {
    type DomainSymbol = Symbol & { _brand: { domainSymbol: undefined } };
    namespace domains {
      const appLocalCache: DomainSymbol;
      const appLocalData: DomainSymbol;
      const appLocalLibrary: DomainSymbol;
      const appLocalShared: DomainSymbol;
      const appLocalTemporary: DomainSymbol;
      const appRoamingData: DomainSymbol;
      const appRoamingLibrary: DomainSymbol;
      const userDesktop: DomainSymbol;
      const userDocuments: DomainSymbol;
      const userMusic: DomainSymbol;
      const userPictures: DomainSymbol;
      const userVideos: DomainSymbol;
    }

    type FormatSymbol = Symbol & { _brand: { formatSymbol: undefined } };
    namespace formats {
      const binary: FormatSymbol;
      const utf8: FormatSymbol;
    }

    type ModeSymbol = Symbol & { _brand: { modeSymbol: undefined } };
    namespace modes {
      const readOnly: ModeSymbol;
      const readWrite: ModeSymbol;
    }

    type TypeSymbol = Symbol & { _brand: { typeSymbol: undefined } };
    namespace types {
      const file: TypeSymbol;
      const folder: TypeSymbol;
    }

    namespace errors {
      class AbstractMethodInvocationError extends Error {}
      class DataFileFormatMismatchError extends Error {}
      class DomainNotSupportedError extends Error {}
      class EntryExistsError extends Error {}
      class EntryIsNotAFileError extends Error {}
      class EntryIsNotAFolderError extends Error {}
      class EntryIsNotAnEntryError extends Error {}
      class FileIsReadOnlyError extends Error {}
      class InvalidFileFormatError extends Error {}
      class InvalidFileNameError extends Error {}
      class NotAFileSystemError extends Error {}
      class OutOfSpaceError extends Error {}
      class PermissionDeniedError extends Error {}
      class ProviderMismatchError extends Error {}
    }

    namespace fileTypes {
      const all: string[];
      const images: string[];
      const text: string[];
    }

    type EntryMetadata = {
      name: string;
      size: number;
      dateCreated: Date;
      dateModified: Date;
      isFile: boolean;
      isFolder: boolean;
    };

    class Entry {
      constructor(name: string, provider: FileSystemProvider, id: string);

      toString: () => string;

      copyTo: (
        folder: Folder,
        options?: {
          overwrite?: boolean;
        }
      ) => Promise<void>;

      moveTo: (
        folder: Folder,
        options?: {
          overwrite?: boolean;
          newName?: string;
        }
      ) => Promise<void>;

      delete: () => Promise<void>;

      getMetadata: () => Promise<EntryMetadata>;

      isEntry: boolean;
      isFile: boolean;
      isFolder: boolean;
      name: string;
      provider: FileSystemProvider;
      url: string;
      nativePath: string;
    }

    class File extends Entry {
      static isFile: (entry: Entry) => boolean;

      isFile: boolean;

      mode: ModeSymbol;

      read: (options?: { format?: FormatSymbol }) => Promise<string | ArrayBuffer>;

      write: (
        data: string | ArrayBuffer,
        options?: { format?: FormatSymbol; append?: boolean }
      ) => Promise<void>;
    }

    class Folder extends Entry {
      static isFolder: (entry: Entry) => boolean;

      isFolder: boolean;

      getEntries: () => Promise<Entry[]>;

      createEntry: (
        name: string,
        options?: {
          type?: TypeSymbol;
          overwrite?: boolean;
        }
      ) => Promise<File | Folder>;

      createFile: (
        name: string,
        options?: {
          overwrite?: boolean;
        }
      ) => Promise<File>;

      createFolder: (name: string) => Promise<Folder>;

      getEntry: (filePath: string) => Promise<File | Folder>;

      renameEntry: (
        entry: Entry,
        newName: string,
        options: {
          overwrite?: boolean;
        }
      ) => Promise<void>;
    }

    class FileSystemProvider {
      static isFileSystemProvider: (fsp: any) => boolean;

      isFileSystemProvider: boolean;

      supportedDomains: DomainSymbol[];

      getFileForOpening: (options?: {
        initialDomain?: DomainSymbol;
        types?: string[];
        initialLocation?: File | Folder;
        allowMultiple?: boolean;
      }) => Promise<File | File[]>;

      getFileForSaving: (
        name: string,
        options?: {
          initialDomain?: DomainSymbol;
          types?: string[];
        }
      ) => Promise<File>;

      getFolder: (options?: { initialDomain?: DomainSymbol }) => Promise<Folder>;

      getTemporaryFolder: () => Promise<Folder>;

      getDataFolder: () => Promise<Folder>;

      getPluginFolder: () => Promise<Folder>;

      getFsUrl: () => string;

      getNativePath: () => string;
    }

    namespace secureStorage {
      const length: number;

      function setItem(key: string, value: string | ArrayBuffer | Uint8Array): Promise<void>;

      function getItem(key: string): Promise<Uint8Array>;

      function removeItem(key: string): Promise<void>;

      function key(index: number): string;

      function clear(): Promise<void>;
    }

    class LocalFileSystemProvider extends FileSystemProvider {}
    const localFileSystem: LocalFileSystemProvider;
  }

  namespace os {
    function platform(): string;

    function release(): string;

    function arch(): string;
  }
}
