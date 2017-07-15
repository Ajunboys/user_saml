OC.L10N.register(
    "user_saml",
    {
    "Saved" : "Sauvegardé",
    "X.509 certificate of the Service Provider" : "Certificat X.509 du fournisseur de service",
    "Private key of the Service Provider" : "Clé privée du fournisseur de service",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Indique que le \"nameID\" de <samlp:logoutRequest> envoyé par ce SP sera chiffré.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Indique que le <samlp:AuthnRequest> de messages envoyé par SP va être signé. [Métadonnée du SP va donner cette info]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Indique si le message <samlp:logoutRequest> envoyé par ce SP sera signé.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Indique si le message <samlp:logoutResponse> envoyé par ce SP sera signé.",
    "Whether the metadata should be signed." : "Si les méta-données peuvent-être signées.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Indique que les éléments <samlp:Response>, <samlp:LogoutRequest> et <samlp:LogoutResponse> reçus par ce SP doivent être signés.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Indique que les éléments <saml:Assertion> reçus par ce SP doivent être signés.[Méta-données du SP offrent cette info]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Indique que les éléments <saml:Assertion> reçus par ce SP doivent être chiffrés.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Indique que l'élément NameID sur la réponse SAML reçu par ce SP doit être présent.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Indique que l'élément NameID sur la réponse SAML reçu par ce SP doit être chiffré.",
    "Indicates if the SP will validate all received XMLs." : "Indique si le SP validera tous les XMLs reçus.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS encode les données du lien SAML en lettre minuscule alors que la boîte à outil utilise par défaut les lettres majuscules. Activez la compatibilité ADFS pour la vérification de la signature.",
    "Attribute to map the UID to." : "Attribut pour relier l'UID.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "Ne permettre l'authentification d'un compte que s'il existe sur un autre système d'authentification. (ex : LDAP)",
    "Attribute to map the displayname to." : "Attribut pour relier le nom d'utilisateur.",
    "Attribute to map the email address to." : "Attribut pour relier l'adresse mail.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Utiliser l'authentification SAML pour le client bureau de %s (requiert une ré-authentification de l'utilisateur)",
    "SSO & SAML authentication" : "Authentification SSO & SAML",
    "Open documentation" : "Voir la documentation",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Veuillez choisir si vous voulez vous authentifier en utilisant le fournisseur SAML intégré à Nextcloud ou si vous voulez vous authentifier avec une variable d'environnement.",
    "Use built-in SAML authentication" : "Utiliser l'authentification SAML intégrée",
    "Use environment variable" : "Utiliser une variable d’environnement",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "Assurez-vous de configurer un utilisateur administratif qui peut accéder à l'instance par SSO. La connexion avec votre compte %s habituel ne sera plus possible.",
    "General" : "Général",
    "Service Provider Data" : "Service du Fournisseur de Données",
    "If your Service Provider should use certificates you can optionally specify them here." : "Si votre fournisseur de service utilise des certificats, vous pouvez les indiquer ici.",
    "Show Service Provider settings…" : "Afficher les options du fournisseur de service...",
    "Identity Provider Data" : "Fournisseur de données d'identité",
    "Configure your IdP settings here." : "Configurez vos options IdP ici.",
    "Identifier of the IdP entity (must be a URI)" : "Identifiant de l'entité IdP (doit être une URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL cible du fournisseur d'identités à qui le fournisseur de service enverra la requête d'authentification",
    "Show optional Identity Provider settings…" : "Afficher les paramètres optionnels du fournisseur d'identité...",
    "URL Location of the IdP where the SP will send the SLO Request" : "URL du fournisseur d'identité où le fournisseur de service enverra la requête de déconnexion SLO",
    "Public X.509 certificate of the IdP" : "Certificat public X.509 de l'IdP",
    "Attribute mapping" : "Mappage des attributs",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "Si vous préférez relier les attributs SAML à l'utilisateur, vous pouvez les configurer ici.",
    "Show attribute mapping settings…" : "Montrer les paramètres du mappage des attributs...",
    "Security settings" : "Paramètres de sécurité",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Pour augmenté la sécurité nous recommandons d'activer les paramètres suivant si ils sont supportés par votre environnement.",
    "Show security settings…" : "Afficher les paramètres de sécurité...",
    "Signatures and encryption offered" : "Signatures et chiffrement proposés",
    "Signatures and encryption required" : "Signatures et chiffrement obligatoire",
    "Download metadata XML" : "Télécharger les méta-données XML",
    "Metadata invalid" : "Méta-données invalides",
    "Metadata valid" : "Méta-données valides",
    "Account not provisioned." : "Compte non approvisionné.",
    "Your account is not provisioned, access to this service is thus not possible." : "Votre compte n'est pas approvisionné, l'accès à ce service n'est donc pas possible.",
    "Show Service Provider settings ..." : "Afficher les options du fournisseur de service...",
    "Show optional Identity Provider settings ..." : "Afficher les paramètres optionnels du fournisseur d'identité",
    "Show security settings ..." : "Afficher les paramètres de sécurité",
    "Show attribute mapping settings ..." : "Montrer les paramètres du mappage des attributs..."
},
"nplurals=2; plural=(n > 1);");
