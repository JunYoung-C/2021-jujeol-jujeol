package com.jujeol.member.application;

import com.jujeol.member.domain.ProviderName;

public interface MemberDetails {

    String accountId();

    ProviderName providerCode();
}