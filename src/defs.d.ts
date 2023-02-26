declare interface App {
    data:  Data;
    error: null;
}

declare interface Data {
    appAdamId:        number;
    providerId:       number;
    previouslyTested: boolean;
    bundleId:         string;
    name:             string;
    platforms:        Platform[];
    shareUrl:         null;
    internal:         boolean;
    ciAccess:         boolean;
    arcadeApp:        boolean;
}

declare interface Platform {
    name:              string;
    hasPreviousBuilds: boolean;
    build:             Build;
}

declare interface Build {
    appAdamId:                 number;
    id:                        number;
    cfBundleShortVersion:      string;
    cfBundleVersion:           string;
    bundleId:                  string;
    name:                      string;
    supportEmail:              string;
    providerName:              string;
    whatsNew:                  string;
    compatible:                boolean;
    expiration:                string;
    fileSize:                  number;
    fileSizeUncompressed:      number;
    platform:                  string;
    platformName:              string;
    compatibilityStatement:    string;
    compatibilityInstructions: string;
    compatibilityMessage:      string;
    hasStickers:               boolean;
    hasMessagesExtension:      boolean;
    watchOnly:                 boolean;
    buildVariant:              BuildVariant;
    embeddedBuilds:            any[];
    releaseDate:               string;
    deviceFamilyInfo:          DeviceFamilyInfo[];
    iconAssetToken:            string;
    iconLargeAssetToken:       string;
    privacyPolicyUrl:          string;
    lastModified:              string;
    termsOfService:            string;
    providerId:                number;
    universal:                 boolean;
    launchProhibited:          boolean;
    platformCompatible:        boolean;
    osCompatible:              boolean;
    hardwareCompatible:        boolean;
}

declare interface BuildVariant {
    variantId:             string;
    betaExternalVersionId: number;
    deviceModelName:       null;
    osVersion:             string;
    bundleId:              string;
    type:                  string;
    compressionMethod:     string;
    externallyCompressed:  boolean;
}

declare interface DeviceFamilyInfo {
    number:  number;
    name:    string;
    iconUrl: string;
}
