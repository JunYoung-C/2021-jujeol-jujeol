package com.jujeol.drink.recommend.domain;

import com.jujeol.drink.drink.domain.Drink;
import com.jujeol.drink.drink.domain.repository.DrinkRepository;
import com.jujeol.drink.recommend.application.RecommendStrategy;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;

@RequiredArgsConstructor
public class RecommendForAnonymous implements RecommendStrategy {

    private final DrinkRepository drinkRepository;

    @Override
    public List<Drink> recommend(Long memberId, int pageSize) {
        return drinkRepository.findDrinks(PageRequest.ofSize(pageSize));
    }
}